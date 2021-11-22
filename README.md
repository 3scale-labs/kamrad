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

## Usage
Given this is just a builder, one will need to have [Kamwiel](https://github.com/3scale-labs/kamwiel) running within a
[Kuadrant](https://github.com/Kuadrant) cluster.

### Locally
You'll need to have the following installed locally:

* [Go](https://golang.org/doc/install)
* [Node](https://nodejs.org/en/)
* [Hugo](https://gohugo.io/getting-started/quick-start/)

1. Clone this repo with submodules and `cd` into it
   ```bash
   git clone --recurse-submodules git@github.com:3scale-labs/kamrad.git && cd kamrad`
   ```
2. Install Node dependencies
    ```bash
    npm install
    ```
3. Run Kamrad locally
    ```bash
    make run
    ```
4. Profit! Open in your favourite browser -> [Kamrad](http://localhost:1313/kamrad/)

### Github pages
Right now, at this PoC stage, the only way to give it a try is forking this repo, adding some configuration as secrets
described below and trigger one of the workflows. You'll also need to set up [GH pages](https://guides.github.com/features/pages/)

#### Config as secrets
* `KAMRAD_TOKEN` A token with repo access for the current GH repository
* `KAMWIEL_API_HASH` Could be blank, later on will be populated with Kamwiel state
* `KAMWIEL_URL` The URL where Kamwiel is hosted
* `KAMWIEL_API_KEY` The API key issued by Kamwiel to use its services

#### Workflows available
* `api-list` A `repository_dispatch` workflow that will trigger the build and deploy, among other checks,
  of the developer portal to the Github pages branch. The event, that eventually will come from Kamwiel, it's a `POST`
  to `https://api.github.com/repos/user/repo/dispatches` looks like
  ```json
  {
    "event_type": "api-list",
    "client_payload": {
        "hash": "THIS_HASH_REPRESENTS_KAMWIEL_API_LIST_STATE"
    }
  }
  ```
* `deploy` Is a workflow run on any `push` to the default branch. It will also build and deploy to GH pages

## Features
This feature list will be evolving with time. Right now it's PoC which might drastically change in the future.

<table>
  <thead>
    <tr>
      <th colspan="2">Feature</th>
      <th>Description</th>
      <th>Stage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="7">Content Management</td>
      <td>Markdown</td>
      <td></td>
      <td>Ready</td>
    </tr>
    <tr>
      <td>HTML</td>
      <td></td>
      <td>Ready</td>
    </tr>
    <tr>
      <td>Images/Videos</td>
      <td></td>
      <td>Ready</td>
    </tr>
    <tr>
      <td>Server side content</td>
      <td>Through Hugo shortcodes. At the moment some Kuadrant resources only.</td>
      <td>Ready</td>
    </tr>
    <tr>
      <td>AsciiDoc</td>
      <td>Would include AsciiDoctor and another build process</td>
      <td>In analysis</td>
    </tr>
    <tr>
      <td>OAS</td>
      <td>Done with a `shortcode` manually or generation script. Based on Swagger</td>
      <td>Ready</td>
    </tr>
    <tr>
      <td>AsyncAPI</td>
      <td></td>
      <td>Planned</td>
    </tr>
    <tr>
      <td rowspan="2">Authentication</td>
      <td>API Key</td>
      <td></td>
      <td>Ready</td>
    </tr>
    <tr>
      <td>SSO</td>
      <td></td>
      <td>Planned</td>
    </tr>
    <tr>
      <td rowspan="1">User MGMT</td>
      <td></td>
      <td></td>
      <td>Planned</td>
    </tr>
    <tr>
      <td rowspan="3">Hosting</td>
      <td>Github Pages</td>
      <td></td>
      <td>Ready</td>
    </tr>
    <tr>
      <td>OpenShift</td>
      <td></td>
      <td>Planned</td>
    </tr>
    <tr>
      <td>Hosting Provider</td>
      <td></td>
      <td>Planned</td>
    </tr>
  </tbody>
</table>
