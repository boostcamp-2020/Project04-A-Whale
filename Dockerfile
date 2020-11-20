FROM node:14.9.0
MAINTAiNER jangky000 <jangky000@mme.dongguk.edu> mistercle <mistercle@gmail.com> yeji9175 <yeji2039@gmail.com>

RUN mkdir -p /server
WORKDIR /server
ADD . /server
RUN npm install

ENV NODE_ENV development

EXPOSE 3000 80

CMD ["npm", "start"]