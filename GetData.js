import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Badge, Card, CardBody, CardHeader, Col, 
Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

function GetData (props) {
    const [data, setdata] = useState([]);

   useEffect( () => {
     const getData = async () => {
     	//const url = 'www.example.com/api/get/1' <- this url is shown 404 error so I can take jsonplaceholder
     	const url = 'https://jsonplaceholder.typicode.com/posts';
       const result = await axios(url);
       setdata(result.data);
     };
      getData();
   }, []);

   return(
       <div className="animated fadeIn">
        <Row>
        <Col>
          <Card>
            <CardHeader>  
              <i className="fa fa-align-justify"></i>List  Data
              </CardHeader>  
            <CardBody>  
              <Table hover bordered striped responsive size="sm">  
                <thead>  
                  <tr>  
                    <th>Title</th>  
                    <th>Body</th>  
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item) => {  
                      return <tr key={item.id}>  
                        <td>{item.title}</td> 
                        <td>{item.body}</td>   
                      </tr>  
                    })}  
                </tbody>  
              </Table>  
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
       </div>
   )
}

export default GetData;