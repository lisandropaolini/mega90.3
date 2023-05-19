terraform {

  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 2.15.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "mega903" {
  name         = "mega903:latest"
  keep_locally = true
}

resource "docker_container" "mega903" {
  image = docker_image.mega903.latest
  name  = "mega903"
  ports {
    internal = 80
    external = 80
  }
}
