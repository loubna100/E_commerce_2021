import React ,{Component, useState} from "react"
/* import { Left } from "react-bootstrap/lib/Media";
import { Container } from "react-bootstrap/lib/Tab"; */
// Using an ES6 transpiler like Babel
//import RangeSlider from 'react-bootstrap-range-slider';


import ReactDOM from 'react-dom';
export default class Filter extends Component{
    state={
       
  category:null  ,   
  color:null,
  price:null,
  size:null

    }
   
  
     /* constructor(props){
        // this.newArr=[]
    
 } */
 //range

 

   
    

    setFilterCategory(p,e)
    {
      
if (e.target.checked==true)
{
    
    this.state.category=p;
 this.props.onSelected(this.state);

}
else{
    this.state.category=null;
}


    }
    setFilterPrice(p,e)
    {
     
        if (e.target.checked==true)
        {
            
            this.state.price=p;
         this.props.onSelected(this.state);
        
        }
        else{
            this.state.price=null;
        }

    }




    setFilterColor(p,e)
    {
     
        if (e.target.checked==true)
        {
            
            this.state.color=p;
         this.props.onSelected(this.state);
        
        }
        else{
            this.state.color=null;
        }

    }
    render(){
        let { volume } = this.state
        
        return(
                   
                    //    this.state.products && (
                        
                    //    )


                    
                       
            <div class="column">
                
               <div id="left-column" class="sidebar col-xs-12 col-sm-12 col-md-4 col-lg-3">
                   <div class="bolck-categories block block-highlighted hidden-sm-down">
                       <h6 class="title_block"><a href="">Shop</a></h6>
                       
                       <div class="block_content">
                           <ul class="category-top-menu">
                              
                           </ul>
                       </div>
                       </div>
                       <div id="search_filters" ><p class="text-uppercase h6 hidden-sm-down">Filter By</p>
                       
                      
                       <section   class="facet clearfix">
                           <p  class="h6 facet-title hidden-sn-down">Categories</p>

                           <div>
                                <input onChange={(e)=>this.setFilterCategory("Computer",e)} type="checkbox" 
                                        ></input>
                                <label >Computer</label>
                                </div>

                                <div>
                                <input onChange={(e)=>this.setFilterCategory("Furniture",e)} type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">Furniture</label>
                                </div>
                                <div>
                                <input  onChange={(e)=>this.setFilterCategory("Clothes",e)}  type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">Clothes</label>
                                </div>
                       </section>
                       
                      
                      
                       <section class="facet clearfix">
                           <p class="h6 facet-title hidden-sn-down">Color</p>
                           <div>
                                <input  onChange={(e)=>this.setFilterColor("white",e)} type="checkbox" id="scales" name="scales"
                                        ></input>
                                <label for="scales">White</label>
                                </div>

                                <div>
                                <input  onChange={(e)=>this.setFilterColor("black",e)} type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">Black</label>
                                </div>
                        </section>
                        
                       

                       


     

                                
                 </div>
                 
            
                                
{/*                       
                       
                       <div id="search_filters" ><p class="text-uppercase h6 hidden-sm-down">Filter By</p>
                       <section   class="facet clearfix">
                           <p class="h6 facet-title hidden-sn-down">Categories</p>

                           <div className="filter-sort">
                           
                        
                            
                
                               
                                <input type="checkbox" id="scales" name="scales"
                                         ></input>
                                <label  for="scales">Scales</label>
                                </div>

                                <div >
                                <input type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">Horns</label>
                                
                                
                                
                                </div>
                       </section>
                    


                       <section class="facet clearfix">
                           <p class="h6 facet-title hidden-sn-down">Color</p>
                           <div>
                                <input type="checkbox" id="scales" name="scales"
                                        ></input>
                                <label for="scales">White</label>
                                </div>

                                <div>
                                <input type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">Black</label>
                                </div>
                                
                       </section>


                       <section class="facet clearfix">
                           <p class="h6 facet-title hidden-sn-down">Size</p>

                           <div>
                                <input type="checkbox" id="scales" name="scales"
                                       ></input>
                                <label for="scales">All</label>
                                </div>
                           <div>
                                <input type="checkbox" id="scales" name="scales"
                                        ></input>
                                <label for="scales">S</label>
                                </div>

                                <div>
                                <input type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">M</label>
                                </div>
                                <div>
                                <input type="checkbox" id="scales" name="scales"
                                        ></input>
                                <label for="scales">L</label>
                                </div>

                                <div>
                                <input type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">XL</label>
                                </div>
                                <div>
                                <input type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">XXL</label>
                                </div>
                                
                       </section>

                       <section class="facet clearfix">
                           <p class="h6 facet-title hidden-sn-down">Prise</p>
                           <div>
                                <input type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">ALL</label>
                                </div>
                           <div>
                                <input type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">Rs.0-100</label>
                                </div>
                                <div>
                                <input type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">Rs.100-500</label>
                                </div>
                                <div>
                                <input type="checkbox" id="horns" name="horns"></input>
                                <label for="horns">Rs.500-1000</label>
                                </div>
                                
                       </section>
                       </div>
                       

 */}



            <div className="filter">
            {/* <div className="filter-result">{this.props.count} product</div> */}
                
            {/* <div className="filter-sort">
                Ctegories{" "}
                <select value={this.props.size} onChange={this.props.sortProducts}>
                    <option>Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="hightest">Hightest</option>
                </select>
                </div>
            <div className="filter-size">
                Size Filter{" "}
                <select value={this.props.size} onChange={this.props.filterProducts}>
                    <option value="">All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
             </div>
             <div className="filter-price">
                 Filter Price{" "}
            <select value={this.props.size} onChange={this.props.filterProducts}> 
                <option value="">All</option>
                    <option value="0-2000">Rs.0-100</option>
                    <option value="100-500">Rs.100-500</option>
                    <option value="500-1000">Rs.500-1000</option>
                    <option value="1000-2000">Rs.1000-2000</option></select>
    
    
  
                
        </div>
        
    </div> */}
    
    </div>
    
    </div>
    </div>

    
                               
            
        );
    }
}