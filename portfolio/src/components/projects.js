import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell,Card, CardTitle, CardText,CardActions, Button,CardMenu, IconButton} from 'react-mdl';

class Project extends Component{
    constructor(props){
        super(props)
          this.state = {activeTab: 0};
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(<div className="project-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'back', height: '176px', background: 'green'}}>
                    My portfolio
                    </CardTitle>
                </Card>

            </div>
                
            )
            }else if(this.state.activeTab === 1){
            return(<div>
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'back', height: '176px', background: 'red'}}>
                    Mini ecommerce Website
                    </CardTitle>  
                </Card>
            </div>
                
            )
        }
        else if(this.state.activeTab === 2){
            return(<div>
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'back', height: '176px', background: 'red'}}>
                       
                    </CardTitle>
                </Card>
            </div>
                
            )
        }
    }
   
    render(){
        return(
            <div className="category-tabs">
              <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                  <Tab>React js</Tab>
                  <Tab>Flask</Tab>
                  <Tab>Express js</Tab>
              </Tabs>

             
                  <Grid >
                      <Cell col={12}>
                          <div className="content">
                          {this.toggleCategories()}
                          </div>
                      </Cell>
                  </Grid>
                   

             
            </div>
        )
    }
}

export default Project;