import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="mt-4">
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3>Difference between Node.JS and Javascript</h3>
          </Accordion.Header>
          <Accordion.Body>
            <h6>
              As Javascript is a Scripting language. It is mostly abbreviated as
              JS. It can be said that Javascript is the updated version of the
              ECMA script. Javascript is a high-level programming language that
              uses the concept of Oops but it is based on prototype inheritance.
              whereas NodeJS is a cross-platform and opensource Javascript
              runtime environment that allows the javascript to be run on the
              server-side. Nodejs allows Javascript code to run outside the
              browser. Nodejs comes with a lot of modules and mostly used in web
              development.
            </h6>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h3>When should you use nodejs and when should you use mongodb</h3>
          </Accordion.Header>
          <Accordion.Body>
            <h6>
              Nodejs is a Javascript engine that you can write any application
              you want with (by programming in the Javascript language). It runs
              your Javascript code. Most commonly, it is used to build servers
              that can respond to web requests, though it can be used for lots
              of other types of code too. Beside, MongoDB is a database engine.
              Code within some application or server uses MongoDB to save, query
              or update data in a database. There are many web servers built
              with nodejs that will then use MongoDB for storing data.
            </h6>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h3>Differences between sql and nosql databases.</h3>
          </Accordion.Header>
          <Accordion.Body>
            <h6>
              First of all, SQL databases are relational, NoSQL databases are
              non-relational. whereas SQL databases use structured query
              language and have a predefined schema. NoSQL databases have
              dynamic schemas for unstructured data. besides, SQL databases are
              better for multi-row transactions, while NoSQL is better for
              unstructured data like documents or JSON. as we know that, SQL
              databases are table-based, while NoSQL databases are document,
              key-value, graph, or wide-column stores. At the most basic level,
              the biggest difference between these two technologies is that SQL
              databases are relational, while NoSQL databases are
              non-relational.
            </h6>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
