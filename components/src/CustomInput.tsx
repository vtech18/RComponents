/*

 todo: system Requirements: 1) install React    2) import or install bootstrap


usage guidance :
    - this is designed perfectly to be fitted with in a row 
      <div clasName="row">
        --- call the component --- 
      </div>

    - no of inputs per row 
         lg -3
         md- 2
         sm-1
   
 ? type:
   -- user can choose from the provided options 
? optionArray: 
  --  it is optional , when your  type is  select then provide this array :: type {id:number,name:string}[]
? label:
  --  label is mandatory
? value:
  -- value is passed to maintain the input value
? setFunction:
   -- this is the function to handle onChange:()=> void  
? name:
  -- name is required for universal onchange
? required:
   -- optional 
? disabled:
     --optional
? idBasedValue:

   -- when ever your type is select some times you value is ID some times NAME based on this you can vary them 



*/

export const CustomInput = ({
    type,  
    optionArray, 
    label,
    value,
    setFunction,
    name,
    required=false,
    disabled=false,
    idBasedValue=false

  }: {
    type: "text" | "select"|"password"|"email"|"number"|"date";
    optionArray?: { id: number; name: string }[];
    label: string;
    value: string;
    setFunction: Function;
    name: string;
    idBasedValue?:boolean
    required:boolean;
    disabled?:boolean
  }) => {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 mb-2 mt-2">
        <span>{label}</span>
        {type !== "select" ? (
          <input
            name={name}
            onChange={(e) => setFunction(e)}
            value={value}
            type={type}
            className="form-control"
            disabled={disabled}
            required={required}
          />
        ) : (
          <select
            name={name}
            onChange={(e) => setFunction(e)}
            value={value}
            className="form-select"
            disabled={disabled}
            required={required}
          >
            <option value={""} selected={value === ""}>
              Select
            </option>
            {optionArray?.map((item) => (
              <option value={item.name} key={idBasedValue?item.id:item.name}>
                {item.name}
              </option>
            ))}
          </select>
        )}
      </div>
    );
  };