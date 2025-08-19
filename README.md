#The bundler makes the app faster. There are various types of bundler such as: parcel, vite, webpack, etc.

#Parcel - It is a bundler which bundle everything. Below are the following things which parcel does:
-Dev Build
-Local Server
-HMR = Hot Module Replacement
-File Watching Algorithm = Written in C++
-Caching = Faster Builds
-Image Optimization
-Bundling
-If use for production it will minified the file(Minification)
-Compress
-Consistent Hashing
-Code Splitting
-Differential Bundling = support older browser
-Diagnostic
-Error Handling
-HTTPs
-Tree Shaking = remove unused code for us
-Different bundles for dev and production

-jsx is not HTML in JS
-It is HTML-like or XML_like syntax
-When jsx code is written it get transpiled(code is converted which is understood by browser) by parcel before it reaches to js engine
-Parcel does not do the transpilation on its own
-This is done by the package known as babel
-Behind the scene jsx is converted to
react.createElement
-jsx can have only one parent

-dont use hooks in if else and loop statement

-2 types of routing
-client-side routing - dont need to load anything from the server
-server-side routing - all our pages come from server

- anchor tag<a> reloads the complete page
- link tag <Link> which we get from react-router waoks similarly to anchor tag but the difference is it does not reload the whole page

- All the children will go in the outlet
- Outlet is provided by react-router