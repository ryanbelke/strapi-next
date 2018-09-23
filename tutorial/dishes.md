*followed instructions to create dishes*

To navigate to the dishes route we can use the Nextjs Link Component and implement it into our card footer button like so:

```javascript
import Link from 'next/link'
<div className="card-footer">
  <Button color="primary">
    <Link as={`/restaurants/${res.name}`} href={`/restaurants/${res._id}`}>
      <a>View</a>
    </Link>
  </Button>
</div>
```

This will route to the /restaurants/:dishId route, but using the Nextjs Link `as` prop, the browser will display the name of the dish to enhance the customer experience (e.g. localhost:3000/restaurants/Fried%20Chicken%20Masters)
we will make the URl a slug in the form fried-chicken-masters for SEO and readability with `.replace(/\s+/g, '-').toLowerCase()`

```javascript
<Link as={`/restaurants/${res.name.replace(/\s+/g, '-').toLowerCase()}`}
      href={`/restaurants?id=${res._id}`}>
  <a>View</a>
</Link>
```
For a complex application, you may not want to manage your routes this way and instead add dynamic routes for manageability
https://github.com/gvergnaud/nextjs-dynamic-routes
