export interface BudgetLineItem {
  id?: number;
  afE_Id: string;
  gate: number;
  wbS_Id: number;
  area_Id: number;
  unit_Id: number;
  vendor?: string;
  quantity: number;
  unit_Cost: number;
  tax_Rate: number;
  total_Cost: number;
  comment?: string;
  date_created?: Date;
  created_by?: string;
  date_modified?: Date;
  modified_by?: string;
  revision_no?: number;
  is_active?: boolean;
  area?: any;
  unit?: any;
  wbs?: any;
  wbsForm?: any;
  parent_Id?: number;
}
