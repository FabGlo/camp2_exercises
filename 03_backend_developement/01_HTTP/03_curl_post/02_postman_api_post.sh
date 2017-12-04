curl -X POST -d "foo"="bar" https://postman-echo.com/post| jq '.json' > 03_postman_api_post.result
