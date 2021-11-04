# Kamrad
[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0)

A _Developer Portal_ builder for [Kuadrant](https://github.com/Kuadrant), a Cloud Native API MGMT solution. Based on
[Hugo](https://gohugo.io/)

## Overview
Kamrad consumes [Kuadrant](https://github.com/Kuadrant) resources, on demand or at build time, generates and deploys
a highly customizable static site with features like API documentation, content creation, and plugins to connect to 3rd
party services. It has a completely static site generation mode, an "on demand"/"dynamic" one and a mix of both.

### Dynamic
This Kamrad operation mode will generate a developer portal that will be consuming resources from
[Kuadrant](https://github.com/Kuadrant) at runtime (from the browser) via [Kamwiel](https://github.com/3scale-labs/kamwiel)

![Kamrad dynamic content](docs/images/kamrad-arch-dynamic.png?raw=true)

### Static
Kamrad also offers a way of producing a fully static site, where it generates pages at build time, the CI/CD process
will consume [Kuadrant](https://github.com/Kuadrant) exposed by [Kamwiel](https://github.com/3scale-labs/kamwiel)

![Kamrad static content](docs/images/kamrad-arch-static.png?raw=true)
