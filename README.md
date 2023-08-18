# digital-invoice-app
Digital invoicing - Assignment
Implement a REST service and a web application to manage invoices.
# Terminology

    Cutommer - A customer can have many invoices
    Invoice - An invoice belong to one and only one Customer
    Address - Holds address informations
# Requirements
# Backend

The service should implement the following fonctionalities:

    Create [Customer, Invoice, Address]
    Update [Customer, Invoice, Address]
    Delete [Customer, Invoice, Address]
    Get all/paginated/partially(search, filter) [customers, invoices, addresses]
To build this backend, we have using Spring Boot version 3+ and MongoDb as database. The Api documentation has been done with swagger. The url is: http://localhost:8001/swagger-ui/index.html

# Frontend

The frontend app should implememt the following features:

    Manage [customers, invoices, addresses] according to provided service(backend)
    Display a paginated data(particularly invoices) with filter support
    Add the possbility to print invoices.
According to this specification, the frontend has been built using the React.js library. To manage the state and consume the backend of the application, Redux Toolkit Query has been used. For styling the components, Tailwind CSS has been used.
# Note: Redux Toolkit Query (RTK Query) is an optional addon to the Redux Toolkit package that provides a powerful data fetching and caching solution. It is designed to simplify common use cases for loading data in a web application, eliminating the need to hand-write data fetching and caching logic. RTK Query is built on top of the other APIs in Redux Toolkit and takes inspiration from other tools like Apollo Client and React Query.
