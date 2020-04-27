FROM nginx:latest

ARG build_env

RUN rm /etc/nginx/conf.d/default.conf; exit 0
RUN rm /etc/nginx/conf.d/nginx.conf; exit 0
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.dev.conf /etc/nginx/nginx.dev.conf

COPY environment.sh /tmp/
RUN chmod u+x /tmp/environment.sh && /tmp/environment.sh $build_env
