# phenoui_kong

This is the initial implementation of the PhenoUI API gateway using kong. This specific repository includes the
implementation of the MAPS plugin for the kong gateway and a docker image and configuration for the application created
during the PhenoUI bootcamp held at Rogers Behavioral Health in Oconomowoc, WI on July 2024.

## Getting Started

To run this project you must have docker installed on your machine. You can install docker by following the instructions
on the [official docker website](https://docs.docker.com/get-docker/). You also need to have a local strapi instance
with the Figma exports for the app and the Flutter app running locally and configured to load the layouts from the local
strapi instance.

### Running the project

To run the project you need to run the following command:

```shell
SALESFORCE_API_TOKEN='<API_KEY>' docker compose up
```
where `<API_KEY>` is the salesforce OAuth2 API key that you want to use to authenticate with the salesforce API.
once the project is running you can hit the API at `http://localhost:8000` on the routes configured in the `kong.yml`
file.

### Echo Server

For testing purposes, you can use the echo server to test the API gateway. The echo server is a simple server that
returns the request headers, query and body as a response. To run the echo server you need [deno](https://deno.com/) 
installed on your system and use the following command to run it:

```shell
 deno run --allow-all ./echo_server/echo.ts 
```

by default, the echo server runs on port 3000, you can change the port by setting the `PORT` environment variable.

To hit the echo server through kong use the endpoints configured in the `kong.yml` file. by default they are:
- `http://localhost:8000/tester/get` for GET requests
- `http://localhost:8000/tester/post` for POST requests

### Configuration

The configuration of the gateway is done through the `kong.yml` file and `jpath` files in the `maps_configs` directory.
The `kong.yml` file contains the configuration of the routes, services, and plugins for the gateway. The `jpath` files
contain the JMESPath queries that are used to transform the headers, query, request and response bodies.

## Debugging

It is recommended to use [postman](https://www.postman.com/) or [curl](https://curl.se/) to test the API gateway.

When debugging the gateway, changes to the `kong.yml` file, `jpath` configurations or plugin source code require a
restart of the gateway. You can restart the gateway by typing the following command on any terminal:

```shell
docker exec -d phenoui_kong-kong-1 kong reload
```
Note: the container name may vary depending on the docker-compose configuration and how many instances are running.

### JMESPath

PhenoUI MAPS is built on top of the JMESPath query language. You can use the 
[JMESPath playground](https://play.jmespath.org/) to test your JMESPath queries. The Kong MAPS plugin includes a number
of extensions not available in the JMESPath playground. You can find the extensions in the
`plugins/maps/MAPSKongExtensions.lua` file.

