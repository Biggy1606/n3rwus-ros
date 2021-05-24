# ROS WEB Development

## Create a virtual enviroment for Python3

```bash
pip install virtualenv
virtualenv venv --python=python3
source venv/bin/activate
```

## Run the webserver for static pages

```bash
cd webpages/build/
python -m http.server
```

## Run ROSBridge Websocket Server

```bash
roslunch rosbridge_server rosbridge_websocket.launch
```