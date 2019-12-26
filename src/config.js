export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_piJzospGp3LWYAnIewrHqtMj00vm92Bl4A",
  s3: {
    REGION: "us-east-1",
    BUCKET: "shaun-elam-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://jpcy686n7k.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_Y5YdBD3DD",
    APP_CLIENT_ID: "3bv20md9n8mm9o0haieo9phule",
    IDENTITY_POOL_ID: "us-east-2:8682f1b3-35fe-4e9e-b4d8-8ee308798249"
  }
};
