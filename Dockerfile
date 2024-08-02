FROM kong/kong-gateway:3.7.1.2

# Ensure any patching steps are executed as root user
USER root

# Install dependencies to run JS plugins
RUN apt update && apt install -y luarocks

# create folder for maps plugin
RUN mkdir -p /usr/local/share/lua/5.1/kong/plugins/pheno_ui_maps
# Install lua-jmespath dependency using luarocks
RUN luarocks install lua-jmespath --force

# mount the plugin
VOLUME ["/usr/local/share/lua/5.1/kong/plugins/pheno_ui_maps"]

# Ensure kong user is selected for image execution
USER kong

# Mount the declarative configuration file
VOLUME ["/kong/declarative"]

# Configure environemnt variables
ENV KONG_DATABASE=off
ENV KONG_DECLARATIVE_CONFIG=/kong/declarative/kong.yml
ENV KONG_PROXY_ACCESS_LOG=/dev/stdout
ENV KONG_ADMIN_ACCESS_LOG=/dev/stdout
ENV KONG_PROXY_ERROR_LOG=/dev/stderr
ENV KONG_ADMIN_ERROR_LOG=/dev/stderr
ENV KONG_ADMIN_LISTEN=0.0.0.0:8001
ENV KONG_ADMIN_GUI_URL=http://localhost:8002

# Run kong
ENTRYPOINT ["/entrypoint.sh"]
EXPOSE 8000 8443 8001 8444
STOPSIGNAL SIGQUIT
HEALTHCHECK --interval=10s --timeout=10s --retries=10 CMD kong health
CMD ["kong", "docker-start"]