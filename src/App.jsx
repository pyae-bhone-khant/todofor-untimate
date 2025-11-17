import { TextField , Box, Divider,   } from '@mui/material';
import Button from '@mui/material/Button'; 
import { useState , useRef } from 'react';
import { Check, Delete } from "@mui/icons-material";

export default function App()  { 
  const [inputValue, setInputValue] = useState(["Eat breakfast", "Walk the dog", "Learn React"]);
  const [newInput, setNewInput] = useState('');

  function handleChange(e) { 
    setNewInput(e.target.value);
  } 

  function handlaAdd() {
    if (newInput === '') return false;
      setInputValue([...inputValue , newInput]);
      setNewInput('');
  }
  
  function handleDelete(i) {
    const updatedLiat = inputValue.filter((item , index) => i !== index);
    setInputValue (updatedLiat);

  }
   
   function handleCheck(i) { 
     
   }
 
   

  return (
     
      <div>

           

      <Box className='items-center flex justify-center gap-3 mt-12'> 
        {/* Input bod */}
         <TextField id="outlined-basic"  label="What needs to be done?" value={newInput} onChange={handleChange} className='w-100 ' variant="outlined"   />     
         {/* Submit button  */}
         <Button variant="outlined" className='h-14 w-30 rounded-2xl ' 
          onClick={handlaAdd}
         >ADD</Button>       
        </Box> 
        <ol className='mb-4'>
          <li className='mt-10 flex flex-col  items-center  justify-center '>
            {inputValue.map((item , i) => ( 
               
              

                  <Box key={i}  className=" border justify-between flex items-center text-center border-blue-900 w-130  h-10 p-2 rounded-2xl bg-blue-900 text-white  text-xl font-bold   mt-2 " >
                     <span>{item}</span>  
                     <Box className="flex gap-3"> 
                     <Check />
                     <Delete onClick={() => handleDelete(i)} />
                     </Box>
                  </Box> 
                  
                
            ))}
          </li> 
        </ol>
          <Divider /> 
           
      </div>
  )
}