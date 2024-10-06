GATEWAY_URL=$(minikube ip)

for i in `seq 1000`; do curl -H "host:canary-demo.com"   $GATEWAY_URL/success; echo ""; sleep 1; done
