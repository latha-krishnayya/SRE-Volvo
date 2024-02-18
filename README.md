
# Platform engineer at Volvo assignment

This is a simple ***`Node.js`*** application that displays a Welcome message.

WelcomeApp application in ***`Azure Kubernetes Service (AKS)`*** provisioned with Terraform, along with setting up a Jenkins pipeline for automatic application deployments.

Before deploying WelcomeApp to AKS and setting up the Jenkins pipeline, ensure you have the following prerequisites in place...

*  `github account`
*  `Azure subscription`
*  `Azure CLI installed`
*  `Terraform installed`
*  `kubectl installed`
*  `Docker installed`
*  `Jenkins installed and configured`
*  `Azure credentials configured in Jenkins`

Follow these steps to deploy WelcomeApp to AKS provisioned with Terraform and set up a Jenkins pipeline for automatic deployments

***`Clone Repository:`***
Clone the WelcomeApp repository to your local machine

```
git clone <repository-url>
```
***`Build Docker Image:`***
Navigate to the welcomeapp directory and build the Docker image
```
cd welcomeapp

docker build -t welcomeapp .
```
***`Push Docker Image:`***
 Push the Docker image to a docker registry
```
docker tag welcomeapp <docker account name>/welcomeapp:latest

docker push <docker account name>/welcomeapp:latest
```
***`Deploy AKS with Terraform:`***
 Navigate to the terraform directory and initialize Terraform

```
cd terraform
terraform init
```
Deploy AKS Cluster: Deploy the AKS cluster using Terraform
```
terraform plan
terraform apply
```
***`Accessing AKS cluster`***:
Once you build the cluster,you need access to the aks cluster from your work station.
To setup your workstation, use the ***az aks get-credentials*** command to get the kubeconfig file for our AKS cluster
```
az aks get-credentials --resource-group myResourceGroup --name myAKSCluster
```

***`Deploy WelcomeApp:`***
Deploy the WelcomeApp application to the cluster using the following commands...
```
kubectl apply -f kubernetes-manifests/deployment.yaml
kubectl apply -f kubernetes-manifests/service.yaml
```
***`Jenkins Pipeline to application deployments:`***
There is a Jenkinsfile in the root of the project repository with the pipeline configuration to deploy the application into the AKS cluster

***`Clean Up:`***
To clean up and delete all Azure resources created by Terraform for any reason, run the following command in the terraform directory 
```
terraform destroy
```

