import type { InterviewQA } from '..';

export const dockerQuestions: InterviewQA[] = [
  {
    id: 'docker-01',
    question: 'What is Docker and how does it differ from traditional Virtual Machines?',
    answer:
      'Docker is an open-source platform that uses OS-level virtualization to deliver software in packages called containers. \n\n**Differences:**\n- **Architecture:** VMs include a full guest OS, whereas Docker containers share the host OS kernel.\n- **Efficiency:** Containers are much lighter, start faster, and use fewer resources than VMs.\n- **Isolation:** VMs provide hardware-level isolation (hypervisor); Docker provides process-level isolation.',
    topicId: 'docker',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'docker-02',
    question: 'Explain the core components of Docker architecture.',
    answer:
      'Docker uses a client-server architecture:\n1.  **Docker Daemon (dockerd):** Listens for API requests and manages Docker objects (images, containers, networks, volumes).\n2.  **Docker Client:** The primary way users interact with Docker (e.g., via `docker` CLI commands).\n3.  **Docker Registries:** Stores Docker images (e.g., Docker Hub).\n4.  **Docker Objects:** Images, Containers, Networks, and Volumes.',
    topicId: 'docker',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'docker-03',
    question: 'What is a Docker Image?',
    answer:
      "A Docker image is a read-only template with instructions for creating a Docker container. It is composed of a series of layers, where each layer represents an instruction in the image's Dockerfile. Images are portable and can be shared via registries.",
    topicId: 'docker',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'docker-04',
    question: 'What is a Docker Container?',
    answer:
      'A Docker container is a runnable instance of an image. It is isolated from other containers and the host machine. You can create, start, stop, move, or delete a container using the Docker API or CLI.',
    topicId: 'docker',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'docker-05',
    question: 'What is a Dockerfile?',
    answer:
      'A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using `docker build`, users can create an automated build that executes several command-line instructions in succession.',
    topicId: 'docker',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'docker-06',
    question: 'How do you create a simple Dockerfile for a Node.js application?',
    answer:
      '```dockerfile\n# Use an official Node.js runtime as a parent image\nFROM node:18\n\n# Set the working directory\nWORKDIR /app\n\n# Copy package.json and package-lock.json\nCOPY package*.json ./\n\n# Install dependencies\nRUN npm install\n\n# Copy the rest of the application code\nCOPY . .\n\n# Expose the port the app runs on\nEXPOSE 3000\n\n# Define the command to run the app\nCMD ["node", "index.js"]\n```',
    topicId: 'docker',
    level: 'junior',
    questionType: 'coding',
  },
  {
    id: 'docker-07',
    question: 'What is the purpose of the `EXPOSE` command in a Dockerfile?',
    answer:
      'The `EXPOSE` instruction informs Docker that the container listens on the specified network ports at runtime. It does not actually publish the port; it functions as documentation between the person who builds the image and the person who runs the container.',
    topicId: 'docker',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'docker-08',
    question: 'Explain the difference between `RUN`, `CMD`, and `ENTRYPOINT`.',
    answer:
      '1.  **RUN:** Executes commands in a new layer on top of the current image and commits the results. Used for installing packages.\n2.  **CMD:** Provides defaults for an executing container. Can be overridden by the user at runtime. Only the last `CMD` in a Dockerfile takes effect.\n3.  **ENTRYPOINT:** Allows you to configure a container that will run as an executable. Harder to override than `CMD`. Arguments passed to `docker run` are appended to the `ENTRYPOINT`.',
    topicId: 'docker',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'docker-09',
    question: 'How do you list all running containers? How about all containers (including stopped ones)?',
    answer: '- Running containers: `docker ps`\n- All containers: `docker ps -a` or `docker container ls -a`',
    topicId: 'docker',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'docker-10',
    question: 'How do you stop a running container?',
    answer: '`docker stop <container_id_or_name>`',
    topicId: 'docker',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'docker-11',
    question: 'How do you remove a container and an image?',
    answer:
      '- Remove container: `docker rm <container_id>` (Must be stopped first unless using `-f`)\n- Remove image: `docker rmi <image_id>`',
    topicId: 'docker',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'docker-12',
    question: 'What are Docker Volumes and why are they used?',
    answer:
      'Volumes are the preferred mechanism for persisting data generated by and used by Docker containers. \n\n**Why use them?**\n- Data persistence even after container is deleted.\n- Sharing data between containers.\n- Decoupling storage from the container lifecycle.\n- Better performance for I/O intensive apps compared to the writable layer.',
    topicId: 'docker',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'docker-13',
    question: 'What is the difference between Bind Mounts and Volumes?',
    answer:
      '- **Volumes:** Managed by Docker and stored in a part of the host filesystem (`/var/lib/docker/volumes/` on Linux). Safest way to persist data.\n- **Bind Mounts:** Can be stored anywhere on the host system. They rely on the host machine having a specific directory structure available.',
    topicId: 'docker',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'docker-14',
    question: 'What is Docker Compose?',
    answer:
      "Docker Compose is a tool for defining and running multi-container Docker applications. With a YAML file (`docker-compose.yml`), you configure your application's services, networks, and volumes, then start all services with a single command: `docker-compose up`.",
    topicId: 'docker',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'docker-15',
    question: 'How do you map a port from the host to a container?',
    answer:
      'Using the `-p` or `--publish` flag with `docker run`:\n`docker run -p <host_port>:<container_port> <image_name>`\n\nExample: `docker run -p 8080:80 nginx` maps host port 8080 to container port 80.',
    topicId: 'docker',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'docker-16',
    question: 'Explain Docker networking modes.',
    answer:
      "1.  **bridge (default):** Containers on the same bridge network can communicate.\n2.  **host:** The container shares the host's networking namespace.\n3.  **none:** No networking for the container.\n4.  **overlay:** Enables communication between containers on different Docker hosts (used in Swarm).\n5.  **ipvlan / macvlan:** Assigns a MAC/IP address to containers for direct connection to physical networks.",
    topicId: 'docker',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'docker-17',
    question: 'What is a "Dangling Image"?',
    answer:
      'A dangling image is an image that is not tagged and is not referenced by any container. They often occur after building a new version of an image with the same name/tag as an existing one. They can be cleaned up using `docker image prune`.',
    topicId: 'docker',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'docker-18',
    question: 'How do you view the logs of a container?',
    answer:
      '`docker logs <container_id_or_name>`\nUse `-f` to follow the log output in real-time: `docker logs -f <name>`',
    topicId: 'docker',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'docker-19',
    question: 'What is the `docker exec` command used for?',
    answer:
      '`docker exec` allows you to run a new command in a currently running container. \nExample: `docker exec -it my_container bash` starts an interactive bash shell inside `my_container`.',
    topicId: 'docker',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'docker-20',
    question: 'How can you reduce the size of a Docker image?',
    answer:
      "- Use smaller base images (e.g., `alpine`).\n- Use Multi-stage builds.\n- Minimize the number of layers (combine `RUN` commands using `&&`).\n- Don't install unnecessary tools (like editors or build tools in production images).\n- Use `.dockerignore` to exclude unnecessary files.",
    topicId: 'docker',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'docker-21',
    question: 'Explain Multi-stage builds and why they are useful.',
    answer:
      'Multi-stage builds allow you to use multiple `FROM` statements in a single Dockerfile. Each `FROM` instruction begins a new stage of the build. You can copy artifacts from one stage to another.\n\n**Benefit:** It allows you to separate the build environment (containing build tools) from the final runtime environment (containing only the production artifacts), significantly reducing the final image size.',
    topicId: 'docker',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'docker-22',
    question: 'Show an example of a Multi-stage build for a Go application.',
    answer:
      '```dockerfile\n# Build stage\nFROM golang:1.21-alpine AS builder\nWORKDIR /app\nCOPY . .\nRUN go build -o myapp .\n\n# Final stage\nFROM alpine:latest\nWORKDIR /root/\nCOPY --from=builder /app/myapp .\nCMD ["./myapp"]\n```',
    topicId: 'docker',
    level: 'mid',
    questionType: 'coding',
  },
  {
    id: 'docker-23',
    question: 'What is the purpose of `.dockerignore`?',
    answer:
      'Similar to `.gitignore`, `.dockerignore` allows you to exclude files and directories from being sent to the Docker daemon during the build process. This speeds up the build and keeps the image clean (e.g., excluding `node_modules`, `.git`, or temporary files).',
    topicId: 'docker',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'docker-24',
    question: 'What is Docker Hub?',
    answer:
      'Docker Hub is a hosted repository service provided by Docker for finding and sharing container images. It is the default registry used by the Docker CLI.',
    topicId: 'docker',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'docker-25',
    question: 'How do you push an image to Docker Hub?',
    answer:
      '1.  `docker login`\n2.  `docker tag <local_image> <username>/<repo_name>:<tag>`\n3.  `docker push <username>/<repo_name>:<tag>`',
    topicId: 'docker',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'docker-26',
    question: 'Explain Docker Swarm.',
    answer:
      "Docker Swarm is Docker's native clustering and orchestration solution. It turns a group of Docker hosts into a single, virtual Docker host. It manages the lifecycle of containers across multiple nodes, provides load balancing, scaling, and rolling updates.",
    topicId: 'docker',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'docker-27',
    question: 'What is a "Layer" in Docker?',
    answer:
      "A layer is a read-only filesystem generated by an instruction in a Dockerfile. Layers are stacked on top of each other. When you change a Dockerfile and rebuild, only the modified layers and those after them are rebuilt, thanks to Docker's layer caching.",
    topicId: 'docker',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'docker-28',
    question: 'What is "Copy-on-Write" in Docker?',
    answer:
      'Docker uses a Copy-on-Write (CoW) strategy for container filesystems. All changes made to a running container are written to a thin "writable layer" on top of the read-only image layers. If a file in an underlying layer needs to be modified, it is first copied to the writable layer.',
    topicId: 'docker',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'docker-29',
    question: 'What are Docker Secrets and how are they different from environment variables?',
    answer:
      'Docker Secrets (available in Swarm mode) allow you to securely store and manage sensitive data like passwords or SSH keys. \n\n**Difference:** Environment variables are often visible in `docker inspect` or to child processes. Secrets are encrypted during transit and at rest, and are only accessible to services that have been granted explicit access.',
    topicId: 'docker',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'docker-30',
    question: "How do you limit a container's memory or CPU usage?",
    answer:
      'Using flags with `docker run`:\n- Memory: `--memory="512m"`\n- CPU: `--cpus="1.5"`\n\nExample: `docker run -d --name myapp --memory="1g" --cpus=".5" myimage`',
    topicId: 'docker',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'docker-31',
    question: 'What is the "Context" in a Docker build?',
    answer:
      "The build context is the set of files that the Docker client sends to the Docker daemon when you run `docker build`. Usually, it's the directory where the Dockerfile is located. Large contexts can slow down builds.",
    topicId: 'docker',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'docker-32',
    question: 'What is the difference between `docker pause` and `docker stop`?',
    answer:
      '- `docker pause` uses the `cgroups` freezer to suspend all processes in the container. The container state is kept in memory.\n- `docker stop` sends a `SIGTERM` signal (and later `SIGKILL`) to the main process, gracefully shutting down the container.',
    topicId: 'docker',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'docker-33',
    question: 'How do you inspect the details of a Docker object (image/container/network)?',
    answer:
      '`docker inspect <id_or_name>` returns a JSON array containing detailed configuration and state information.',
    topicId: 'docker',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'docker-34',
    question: 'Explain the "PID 1 Problem" in Docker containers.',
    answer:
      "The process started by `CMD` or `ENTRYPOINT` becomes PID 1 inside the container. In Linux, PID 1 has special responsibilities (reaping zombie processes, handling signals). If your app isn't designed to handle these (e.g., `SIGTERM`), it might not shut down gracefully. Using a tool like `tini` as an init process can solve this.",
    topicId: 'docker',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'docker-35',
    question: 'How can you run a Docker container in the background?',
    answer: 'Use the `-d` (detached) flag: `docker run -d myimage`',
    topicId: 'docker',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'docker-36',
    question: 'What is Docker Content Trust (DCT)?',
    answer:
      'DCT allows you to verify the integrity and the publisher of all the data received from a registry. It uses digital signatures to ensure that the images being downloaded are exactly what the publisher uploaded.',
    topicId: 'docker',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'docker-37',
    question: 'How do you clean up all unused Docker resources (containers, networks, images, and optionally volumes)?',
    answer:
      '`docker system prune` cleans up stopped containers, unused networks, and dangling images. Adding `-a` also removes unused images. Adding `--volumes` removes unused volumes.',
    topicId: 'docker',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'docker-38',
    question: 'What is the purpose of `docker-compose.override.yml`?',
    answer:
      'By default, Docker Compose looks for `docker-compose.yml` and `docker-compose.override.yml`. The override file is used to store environment-specific configurations (like dev-only settings) that should not be committed to production or should override base settings.',
    topicId: 'docker',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'docker-39',
    question: 'How do you share a volume between two containers?',
    answer:
      'By giving them the same volume name in `docker-compose.yml` or using the `--volumes-from` flag in `docker run`. \n\nCompose example:\n```yaml\nservices:\n  app1:\n    volumes: ["mydata:/data"]\n  app2:\n    volumes: ["mydata:/data"]\nvolumes:\n  mydata:\n```',
    topicId: 'docker',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'docker-40',
    question: 'What is the "Scratch" image?',
    answer:
      '`scratch` is an empty Docker image. It is useful for building extremely small images for statically linked binaries (like those written in Go) where no OS utilities are needed.',
    topicId: 'docker',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'docker-41',
    question: 'How does Docker handle storage drivers? Mention some examples.',
    answer:
      'Docker uses storage drivers to manage image layers and the writable container layer. Examples include `overlay2` (preferred), `aufs`, `devicemapper`, `btrfs`, and `zfs`. The driver handles the union filesystem implementation.',
    topicId: 'docker',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'docker-42',
    question: 'What is a Sidecar container pattern?',
    answer:
      'A sidecar container is a secondary container that runs alongside the main application container in the same logical unit (like a Pod in K8s). It provides supporting features like logging, monitoring, proxying, or config synchronization without modifying the main app.',
    topicId: 'docker',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'docker-43',
    question: 'How do you check the resource usage (CPU/Memory) of all running containers?',
    answer: '`docker stats` provides a live stream of resource usage statistics for all containers.',
    topicId: 'docker',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'docker-44',
    question: 'What is the `HEALTHCHECK` instruction in a Dockerfile?',
    answer:
      '`HEALTHCHECK` tells Docker how to test a container to check that it is still working. For example, it can check if a web server is responding. If the check fails, Docker marks the container as "unhealthy".',
    topicId: 'docker',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'docker-45',
    question: 'Write a Dockerfile `HEALTHCHECK` that checks a web server on port 80 every 5 minutes.',
    answer: '```dockerfile\nHEALTHCHECK --interval=5m --timeout=3s \\\n  CMD curl -f http://localhost/ || exit 1\n```',
    topicId: 'docker',
    level: 'mid',
    questionType: 'coding',
  },
  {
    id: 'docker-46',
    question: 'What is Docker Scan?',
    answer:
      '`docker scan` (powered by Snyk) is a command used to scan Docker images for known vulnerabilities. It provides a detailed report on security issues found in the image layers.',
    topicId: 'docker',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'docker-47',
    question: 'How do you use environment variables in `docker-compose.yml`?',
    answer:
      'You can use `${VARIABLE_NAME}` syntax. Compose will pull these from the shell environment or an `.env` file in the same directory.',
    topicId: 'docker',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'docker-48',
    question: 'Explain the difference between `ADD` and `COPY` in a Dockerfile.',
    answer:
      "- `COPY` is straightforward: it copies files/directories from the host to the container.\n- `ADD` has extra features: it can fetch files from URLs and automatically extract tar files. `COPY` is generally preferred for its simplicity unless `ADD`'s extra features are specifically needed.",
    topicId: 'docker',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'docker-49',
    question: 'What happens if a process in a Docker container exceeds its memory limit?',
    answer:
      "If the container exceeds its memory limit, the Linux kernel's OOM (Out Of Memory) killer will typically terminate the process inside the container, leading to a container crash (Exit Code 137).",
    topicId: 'docker',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'docker-50',
    question: 'How can you export and import a Docker container as a tarball?',
    answer:
      '- Export: `docker export <container_id> > contents.tar` (exports the filesystem)\n- Import: `docker import contents.tar <new_image_name>`',
    topicId: 'docker',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'docker-51',
    question: 'What is the difference between `docker save` and `docker export`?',
    answer:
      '- `docker save` saves an *image* (including history and metadata).\n- `docker export` exports the filesystem of a *container* (losing history and metadata).',
    topicId: 'docker',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'docker-52',
    question: 'How do you run a container with a custom name?',
    answer: '`docker run --name my_custom_name image_name`',
    topicId: 'docker',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'docker-53',
    question: 'What is the Docker Desktop "VirtioFS"?',
    answer:
      'VirtioFS is a shared file system that provides high-performance file sharing between the host (macOS/Windows) and the Linux VM running Docker. It significantly improves I/O performance for bind-mounted directories.',
    topicId: 'docker',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'docker-54',
    question: 'Explain "Docker-in-Docker" (DinD).',
    answer:
      'DinD involves running a Docker daemon inside a Docker container. This is often used for CI/CD pipelines where you need to build and push Docker images from within a containerized build agent. It requires the `--privileged` flag.',
    topicId: 'docker',
    level: 'expert',
    questionType: 'theory',
  },
  {
    id: 'docker-55',
    question: 'What are the security risks of using the `--privileged` flag?',
    answer:
      'The `--privileged` flag gives the container almost all the same capabilities as the host machine, including access to host hardware and the ability to escape container isolation. It should be avoided in production.',
    topicId: 'docker',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'docker-56',
    question: 'How do you handle log rotation for Docker containers?',
    answer:
      'You can configure log rotation in `daemon.json` or per-container using `--log-opt`. \nExample: `--log-opt max-size=10m --log-opt max-file=3`.',
    topicId: 'docker',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'docker-57',
    question: 'What is a User Namespace in Docker?',
    answer:
      "User namespaces allow you to map the `root` user inside a container to a non-privileged user on the host. This enhances security by ensuring that even if a container is compromised, the attacker doesn't have root access to the host.",
    topicId: 'docker',
    level: 'expert',
    questionType: 'theory',
  },
  {
    id: 'docker-58',
    question: 'How do you change the default Docker storage location?',
    answer:
      'By modifying the `data-root` property in the `/etc/docker/daemon.json` file and restarting the Docker service.',
    topicId: 'docker',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'docker-59',
    question: 'Explain the "Overlay2" storage driver.',
    answer:
      'Overlay2 is a union filesystem that allows multiple directories to be viewed as one. It works by having an "upper" and "lower" directory. Changes are made in the "upper" directory. It is the modern, high-performance default for most Linux distributions.',
    topicId: 'docker',
    level: 'expert',
    questionType: 'theory',
  },
  {
    id: 'docker-60',
    question: 'What is the role of `containerd` in modern Docker?',
    answer:
      '`containerd` is an industry-standard container runtime. Docker originally built it and later donated it to CNCF. Docker now uses `containerd` internally to manage the container lifecycle (start, stop, pause, resume), while Docker itself provides higher-level features like image building and developer tools.',
    topicId: 'docker',
    level: 'expert',
    questionType: 'theory',
  },
];
