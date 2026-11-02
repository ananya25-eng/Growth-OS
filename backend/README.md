# Growth OS Backend

Node.js + Express + MongoDB API for the Growth OS student growth platform.

## Includes
- Student registration and login (bcrypt password hashing + JWT).
- Protected current-user endpoint.
- Achievement CRUD (academics, projects, certifications, internships, competitions).
- Skill CRUD (category, proficiency, level, notes and evidence).
- Dashboard overview (achievement count, completed achievements, skill count, average proficiency, recent achievements).
- Mongoose models, controllers, routes, validation and error handling.
- Ready-to-import Postman collection.

## Requirements
Node.js 18+, npm, MongoDB Atlas account, Postman.

## Install and configure
```bash
cd backend
npm install
cp .env.example .env
```
On Windows PowerShell: `Copy-Item .env.example .env`.

Edit `backend/.env`:
- `MONGO_URI`: your MongoDB Atlas Node.js connection string.
- `JWT_SECRET`: a long random secret with at least 24 characters.
- `CLIENT_ORIGIN`: your frontend origin. The template includes Live Server defaults.

Never commit `.env`; it is ignored by Git.

## MongoDB Atlas
1. Create a cluster and a database user under Database Access.
2. Under Network Access, allow your current IP address for development.
3. Select Connect → Drivers → Node.js and copy the connection string.
4. Put it in `MONGO_URI` in `.env`. URL-encode special characters in the database user's password.

## Run
```bash
npm run dev
# or
npm start
```
API: `http://localhost:5000`; health check: `GET http://localhost:5000/api/health`.

## API endpoints
Protected endpoints require `Authorization: Bearer <token>`.

### Authentication
| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/auth/register` | Create account |
| POST | `/api/auth/login` | Login and receive JWT |
| GET | `/api/auth/me` | Current account (protected) |

Register JSON:
```json
{
  "name": "Student Name",
  "email": "student@example.com",
  "password": "StrongPass123",
  "college": "Your University",
  "course": "B.Tech CSE",
  "year": 2,
  "studentId": "CSE-001"
}
```
Login JSON:
```json
{ "email": "student@example.com", "password": "StrongPass123" }
```

### Achievements — full CRUD (protected)
| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/achievements` | Create |
| GET | `/api/achievements` | List (page, limit, category, status filters) |
| GET | `/api/achievements/:id` | Read one |
| PUT/PATCH | `/api/achievements/:id` | Update |
| DELETE | `/api/achievements/:id` | Delete |

Create JSON:
```json
{
  "title": "Web Development Project",
  "category": "Project",
  "description": "Built a responsive student growth website.",
  "issuer": "College",
  "achievedOn": "2026-10-20",
  "status": "Completed",
  "tags": ["HTML", "CSS", "JavaScript"]
}
```
Categories: Academic, Project, Certification, Internship, Competition, Volunteering, Other.

### Skills — full CRUD (protected)
| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/skills` | Create |
| GET | `/api/skills` | List (page, limit, category filters) |
| GET | `/api/skills/:id` | Read one |
| PUT/PATCH | `/api/skills/:id` | Update |
| DELETE | `/api/skills/:id` | Delete |

Create JSON:
```json
{
  "name": "JavaScript",
  "category": "Technical",
  "proficiency": 70,
  "level": "Intermediate",
  "notes": "Practising DOM and asynchronous JavaScript."
}
```

### Dashboard
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/dashboard/overview` | Summary counts, average skill proficiency and recent achievements |

## Postman
Import `postman/Growth-OS-Backend.postman_collection.json`.
1. Run Health.
2. Run Register once (or Login if the test account exists).
3. The collection stores the JWT automatically.
4. Run Achievement and Skill requests in order. Create saves the generated ID for read/update/delete.
5. Run Dashboard Overview.

The API is implemented separately. The existing static frontend has not yet been connected to these endpoints.
