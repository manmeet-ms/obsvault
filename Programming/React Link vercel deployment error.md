[Handling 404 Errors on Vercel Deployments: A Step-by-Step Guide with React, Vite, and react-router-dom | by Signor Dev | Medium](https://medium.com/@emmanuelomemgboji/handling-404-errors-on-vercel-deployments-a-step-by-step-guide-with-react-vite-and-31fc4d865dc9)
## Using Vercel Rewrites

Vercel, our preferred deployment platform, provides a solution to this problem through its powerful “rewrites” functionality. Rewrites allow us to configure how incoming requests to our application’s URLs should be handled. With the right rewrite rules, we can ensure that all requests are redirected to the root URL, preventing the 404 error from occurring.

## **Procedures** :

1. _Create a_ `_vercel.json_` _File:_

To define our rewrite rules, we need to create a `vercel.json` file in the root directory of our project. This file serves as the configuration for our Vercel deployment.

// vercel.json  
  
{  
  "rewrites": [  
    {  
      "source": "/(.*)",  
      "destination": "/"  
    }  
  ]  
}

In the above code, we defined a simple rewrite rule:

- `"source": "/(.*)"`: This source pattern matches any URL, capturing all incoming requests.
- `"destination": "/"`: It specifies that regardless of the incoming URL, it should be rewritten to the root URL (`/`).

2. _Deploy to Vercel:_

Now that the rewrite rule has been configured, we can deploy our application to Vercel. You can do this through the CLI, by linking your Vercel account to your Git repository, or by deploying directly from your code repository.

vercel

If you have already deployed the project to vercel before and you didn’t use git repo, you can run this on your CLI

vercel --prod

Once the deployment is complete, access your application on Vercel using its assigned URL. Try navigating to different routes and refreshing the page — you’ll notice that the 404 error is no longer an issue. The rewrite rule ensures that all requests are redirected to the root URL, and your SPA’s client-side routing takes over from there.

## Conclusion

Handling the 404 error on Vercel deployments for SPAs is a crucial step in providing a smooth and user-friendly experience. By integrating `react-router-dom` for client-side routing and configuring Vercel rewrites, you've overcome this common challenge, ensuring that your application functions flawlessly in a production environment.