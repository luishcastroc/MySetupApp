# My Tech Setup

Mini project oriented in using the basics to generate a full application using .NET CORE 5.0 and Angular 11, checking a lot of basics.

## State Management

State Handled with **[NGXS]**(https://www.ngxs.io/)

## Certificate Generation WSL2 Windows

use the next command to generate the certificate and esport it to windows

dotnet dev-certs https -ep /mnt/c/Users/<username>/.aspnet/https/aspnetapp.pfx -p <cryptic-password>

then add this to your terminal (id using ~/.zshrc)

export ASPNETCORE_Kestrel**Certificates**Default**Password="password"
export ASPNETCORE_Kestrel**Certificates**Default**Path=/mnt/c/Users/<username>/.aspnet/https/aspnetapp.pfx

this will make the application work inside the linux distro for WSL2
