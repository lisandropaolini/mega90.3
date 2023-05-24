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
  name         = var.docker_image_name
  keep_locally = true
}

resource "docker_container" "mega903" {
  image = docker_image.mega903.name
  name  = var.docker_container_name
  ports {
    internal = 80
    external = 8080
  }
}
