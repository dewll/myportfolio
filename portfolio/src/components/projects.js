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
                       React Project #1
                    </CardTitle>
                    <CardText>This is React  lhlhjoljhojojoijoijoijojlojljljl</CardText>
                    <CardActions border>
                        <Button colored>GithHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>sodiq</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name ="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'back', height: '176px', background: 'Blue'}}>
                       React Project #1
                    </CardTitle>
                    <CardText>This is React  lhlhjoljhojojoijoijoijojlojljljl</CardText>
                    <CardActions border>
                        <Button colored>GithHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>sodiq</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name ="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'back', height: '176px', background: 'purple'}}>
                       React Project #1
                    </CardTitle>
                    <CardText>This is React  lhlhjoljhojojoijoijoijojlojljljl</CardText>
                    <CardActions border>
                        <Button colored>GithHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>sodiq</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name ="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'back', height: '176px', background: 'cyan'}}>
                       React Project #1
                    </CardTitle>
                    <CardText>This is React  lhlhjoljhojojoijoijoijojlojljljl</CardText>
                    <CardActions border>
                        <Button colored>GithHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>sodiq</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name ="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'back', height: '176px', background: 'cyan'}}>
                       React Project #1
                    </CardTitle>
                    <CardText>This is React  lhlhjoljhojojoijoijoijojlojljljl</CardText>
                    <CardActions border>
                        <Button colored>GithHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>sodiq</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name ="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'back', height: '176px', background: 'indigo'}}>
                       React Project #1
                    </CardTitle>
                    <CardText>This is React  lhlhjoljhojojoijoijoijojlojljljl</CardText>
                    <CardActions border>
                        <Button colored>GithHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>sodiq</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name ="share"/>
                    </CardMenu>
                </Card>

            </div>
                
            )
            }else if(this.state.activeTab === 1){
            return(<div>
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'back', height: '176px', background: 'red'}}>
                       Flask Project #1
                    </CardTitle>
                    <CardText>This is  Flask lhhjoljhojojoijoijoijojlojljljl</CardText>
                    <CardActions border>
                        <Button colored>GithHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>sodiq</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name ="share"/>
                    </CardMenu>
                </Card>
            </div>
                
            )
        }
        else if(this.state.activeTab === 2){
            return(<div>
                   <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'back', height: '176px', background: 'yellow'}}>
                   vue Project #2
                </CardTitle>
                <CardText>This is vue  lhlhjoljhojojoijoijoijojlojljljl</CardText>
                <CardActions border>
                    <Button colored>GithHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>sodiq</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name ="share"/>
                </CardMenu>
            </Card>
            </div>
               
            )
        }
        else if(this.state.activeTab === 3){
            return(<div>
                 <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'back', height: '176px', background: 'orange'}}>
                   python Project #3
                </CardTitle>
                <CardText>This is python  lhlhjoljhojojoijoijoijojlojljljl</CardText>
                <CardActions border>
                    <Button colored>GithHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>sodiq</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name ="share"/>
                </CardMenu>
            </Card>
            </div>
                
            )
        }
    }
   
    render(){
        return(
            <div className="category-tabs">
              <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                  <Tab>React</Tab>
                  <Tab>Flask</Tab>
                  <Tab>Vue</Tab>
                  <Tab>Python</Tab>
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