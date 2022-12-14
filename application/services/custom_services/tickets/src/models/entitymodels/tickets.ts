
export interface tickets 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   name: String,
   description: String,
   callername: String,
   types: { type: String, ref: 'types' },
   severity: { type: String, ref: 'severity' }
}
