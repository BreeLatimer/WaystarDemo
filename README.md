# WaystarDemo

A production-style CI/CD pipeline demo built with .NET 8, Docker, GitHub Actions, and Harness — showcasing a complete path from code commit to blue/green deployment on Kubernetes.

---

## Overview

This project demonstrates a full software delivery pipeline for a .NET 8 Web API, including automated testing, containerization, continuous integration, and continuous deployment with a zero-downtime blue/green strategy.

---

## Tech Stack

| Layer | Technology |
|---|---|
| API | ASP.NET Core Web API (.NET 8) |
| Testing | xUnit |
| Containerization | Docker (multi-stage build) |
| Source Control | GitHub |
| CI Pipeline | GitHub Actions |
| Container Registry | GitHub Container Registry (GHCR) |
| CD Pipeline | Harness |
| Orchestration | Kubernetes (Docker Desktop) |
| Deployment Strategy | Blue/Green |

---

## Pipeline Architecture

```
Code Push → GitHub Actions → Build & Test → Docker Image → GHCR → Harness → Kubernetes (Blue/Green)
```

### CI Pipeline (GitHub Actions)

On every push to `main`:

1. **Build & Test** — Restores dependencies, compiles, and runs xUnit tests
2. **Docker Build** — Only runs if tests pass (job dependency gate)
3. **Push to Registry** — Publishes image to GitHub Container Registry

### CD Pipeline (Harness)

On trigger:

1. Pulls latest image from GHCR
2. Deploys to Kubernetes using Blue/Green strategy
3. Swaps service selectors for zero-downtime cutover
4. Old environment remains available for instant rollback

---

## Project Structure

```
WaystarDemoV2/
├── .github/
│   └── workflows/
│       └── pipeline.yml       # GitHub Actions CI pipeline
├── WaystarDemo/
│   ├── Controllers/
│   │   └── WeatherForecastController.cs
│   ├── Dockerfile             # Multi-stage Docker build
│   ├── Program.cs
│   └── WaystarDemo.csproj
├── WaystarDemo.Tests/
│   ├── UnitTest1.cs           # xUnit tests
│   └── WaystarDemo.Tests.csproj
├── k8s/
│   ├── deployment.yaml        # Kubernetes Deployment manifest
│   └── service.yaml           # Kubernetes Service manifest
└── WaystarDemo.sln
```

---

## Key Design Decisions

**Multi-stage Dockerfile** — Separates build and runtime environments, keeping the final image lean and production-ready.

**Docker layer caching** — Copies `.csproj` and restores dependencies before copying source code. This means the expensive restore step only reruns when dependencies actually change, not on every code change.

**Pipeline gate** — The Docker build job has a `needs: build-and-test` dependency. If any test fails, the pipeline stops — a Docker image is never built from broken code.

**Blue/Green deployment** — Harness maintains two identical environments. New versions deploy to the inactive environment first, then Harness swaps the Kubernetes service selectors instantly — achieving zero-downtime deployments with immediate rollback capability.

---

## Running Locally

```bash
# Run the API
cd WaystarDemo
dotnet run

# Run tests
dotnet test WaystarDemo.Tests/WaystarDemo.Tests.csproj

# Build Docker image
docker build -t waystar-demo .

# Run container
docker run -p 5004:8080 waystar-demo
```

API available at: `http://localhost:5004/weatherforecast`

---

## What I Learned

Building this project end-to-end gave me hands-on experience with:
- Structuring CI pipelines with meaningful job dependencies and fail-fast gates
- Optimizing Docker builds for caching and image size
- Connecting a container registry to a CD platform
- Configuring Kubernetes manifests for real deployments
- Executing a blue/green deployment strategy with zero downtime

---

*Built as a hands-on CI/CD learning project — from zero to blue/green deployment.*
