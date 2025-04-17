CI/CD Pipeline Setup with Git, Jenkins and Kubernetes

TASK OVERVIEW:
This task involves the setting up Continous Integration/ Continous Deploymnet using Git, Jenkins, Kubernetes. The pipeline automates the process of building artifacts upon code-commits and deploying them to kubernetes.

PIPELINE STEPS:
Jenkins Clones the repository from the Git upon each commit.
Jenkins triggers the build process for the Docker image
Once the build is successful, Jenkins pushed the Docker image to Docker registry
After, Jenkins deploys the Docker image to the Kubernetes Cluster using a k8s-deployment.yaml file.
