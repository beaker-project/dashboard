# Dashboard

Dashboard is SPA (Single Page Application) for [Beaker](https://github.com/beaker-project/beaker/).


## Running it in a container:

To run the Web Interface in your favorite container environment, use the provided Dockerfile. We recommend `podman`.
Build the container image with:

```shell
$ podman build . -t dashboard
```

After building is completed, you can run it, mapping port 80 to some local port:

```shell
$ podman run -d -p 8081:80 dashboard
```

The Interface should now be available in the address `http://localhost:8081`
