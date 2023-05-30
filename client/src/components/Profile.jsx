 
import React from 'react';
import { Button} from 'react-bootstrap'

 const Profile = () => {
 
  return( 
  <div>
    <div class="row">
      <div class="mt-5 mb-4">
        <button variant="primary"><i class="fa fa-plu"></i>
           Add new gig
        </button>
      </div>

    </div>
    <div class="row">
<div class="table-responsive">
  <table class="table table-striped table-hover table-bordered">
    <tread>
      <tr>
       <th>Title</th>
       <th>description</th>
       <th>Total stars</th>
       <th>Star number</th>
       <th>Category</th>



      </tr>
    </tread>
    <tbody>
      
    </tbody>
  </table>

</div>
    </div>
    </div>
    
 ); 
};
export default Profile;