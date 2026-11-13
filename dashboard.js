async function api(url, options = {}) {
    const response = await fetch(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {})
        }
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
    }

    return data;
}

const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
}[char]));

// LOAD DASHBOARD
async function loadDashboard() {
    try {
        const user = await api("/api/me");

        document.getElementById("userName").textContent =
            user.name.split(" ")[0];

        document.getElementById("userInitial").textContent =
            user.name.charAt(0).toUpperCase();

        document.getElementById("todayDate").textContent =
            new Date().toLocaleDateString(undefined, {
                day: "numeric",
                month: "short",
                year: "numeric"
            });

        await Promise.all([
            loadGoals(),
            loadHabits()
        ]);

    } catch (error) {
        window.location.href = "login.html";
    }
}

// LOAD GOALS
async function loadGoals() {
    const goals = await api("/api/goals");

    const list = document.getElementById("goalList");

    document.getElementById("totalGoals").textContent =
        goals.length;

    document.getElementById("completedGoals").textContent =
        goals.filter(g => g.completed).length;

    list.innerHTML = goals.length
        ? goals.map(goal => `
            <div class="item">

                <input type="checkbox"
                    data-goal-check="${goal.id}"
                    ${goal.completed ? "checked" : ""}>

                <div class="item-title ${goal.completed ? "done" : ""}">
                    ${escapeHTML(goal.title)}

                    ${goal.targetDate
                        ? `<small>Target: ${escapeHTML(goal.targetDate)}</small>`
                        : ""}
                </div>

                <button class="delete-btn"
                    data-goal-delete="${goal.id}">
                    Delete
                </button>

            </div>
        `).join("")
        : '<div class="empty-state">No goals yet. Add your first goal!</div>';
}

// LOAD HABITS
async function loadHabits() {
    const habits = await api("/api/habits");

    const list = document.getElementById("habitList");

    document.getElementById("completedHabits").textContent =
        `${habits.filter(h => h.completed).length}/${habits.length}`;

    list.innerHTML = habits.length
        ? habits.map(habit => `
            <div class="item">

                <input type="checkbox"
                    data-habit-check="${habit.id}"
                    ${habit.completed ? "checked" : ""}>

                <div class="item-title ${habit.completed ? "done" : ""}">
                    ${escapeHTML(habit.title)}
                </div>

                <button class="delete-btn"
                    data-habit-delete="${habit.id}">
                    Delete
                </button>

            </div>
        `).join("")
        : '<div class="empty-state">No habits yet. Add your first habit!</div>';
}

// ADD GOAL FORM
document.getElementById("goalForm").addEventListener("submit", async event => {
    event.preventDefault();

    const title = document.getElementById("goalTitle").value.trim();
    const targetDate = document.getElementById("goalDate").value;

    if (!title) {
        document.getElementById("goalMessage").textContent =
            "Please enter a goal.";
        return;
    }

    try {
        await api("/api/goals", {
            method: "POST",
            body: JSON.stringify({
                title,
                targetDate
            })
        });

        event.target.reset();

        document.getElementById("goalMessage").textContent =
            "Goal saved successfully!";

        await loadGoals();

    } catch (error) {
        document.getElementById("goalMessage").textContent =
            error.message;
    }
});

// ADD HABIT FORM
document.getElementById("habitForm").addEventListener("submit", async event => {
    event.preventDefault();

    const title = document.getElementById("habitTitle").value.trim();

    if (!title) {
        document.getElementById("habitMessage").textContent =
            "Please enter a habit.";
        return;
    }

    try {
        await api("/api/habits", {
            method: "POST",
            body: JSON.stringify({ title })
        });

        event.target.reset();

        document.getElementById("habitMessage").textContent =
            "Habit saved successfully!";

        await loadHabits();

    } catch (error) {
        document.getElementById("habitMessage").textContent =
            error.message;
    }
});

// COMPLETE GOALS AND HABITS
document.addEventListener("change", async event => {

    const goalId = event.target.dataset.goalCheck;
    const habitId = event.target.dataset.habitCheck;

    try {
        if (goalId) {
            await api(`/api/goals/${goalId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    completed: event.target.checked
                })
            });

            await loadGoals();
        }

        if (habitId) {
            await api(`/api/habits/${habitId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    completed: event.target.checked
                })
            });

            await loadHabits();
        }

    } catch (error) {
        alert(error.message);
    }
});

// DELETE GOALS AND HABITS
document.addEventListener("click", async event => {

    const goalId = event.target.dataset.goalDelete;
    const habitId = event.target.dataset.habitDelete;

    try {
        if (goalId && confirm("Are you sure you want to delete this goal?")) {
            await api(`/api/goals/${goalId}`, {
                method: "DELETE"
            });

            await loadGoals();
        }

        if (habitId && confirm("Are you sure you want to delete this habit?")) {
            await api(`/api/habits/${habitId}`, {
                method: "DELETE"
            });

            await loadHabits();
        }

    } catch (error) {
        alert(error.message);
    }
});

// LOGOUT
document.getElementById("logoutButton").addEventListener("click", async () => {

    try {
        await api("/api/logout", {
            method: "POST"
        });

        window.location.href = "index.html";

    } catch (error) {
        alert(error.message);
    }
});

// START DASHBOARD
loadDashboard();
