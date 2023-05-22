output "container_id" {
  description = "ID of the Docker container"
  value       = docker_container.mega903.id
}

output "image_id" {
  description = "ID of the Docker image"
  value       = docker_image.mega903.id
}
