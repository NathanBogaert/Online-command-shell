# Online Command Shell

This web app was initially created with a Remote Code Execution (RCE) vulnerability, witch was later corrected.

## Getting the desired app version

To obtain the app with RCE vulnerability:

```git
git clone https://github.com/NathanBogaert/Online-command-shell.git
git checkout 8712b5391731b74798e8019208017ed136410153
```

To obtain the app without RCE vulnerability;

```git
git clone https://github.com/NathanBogaert/Online-command-shell.git
```

## Setup

To set up the app, follow these step:

1. Start Docker.
2. Build the image of the app:

```docker
docker build -t online-command-shell .
```

3. Once the image is created, create and launch the container:

```docker
docker run -p 3000:3000 online-command-shell
```
