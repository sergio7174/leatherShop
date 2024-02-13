export interface AddItemProps {
    setOpenAddItem: React.Dispatch<React.SetStateAction<boolean>>;
    setToastText: React.Dispatch<React.SetStateAction<string>>;
    setOpenToast: React.Dispatch<React.SetStateAction<boolean>>;
  }

  export interface IFormData {
    name: string;
    type: string;
    description: string;
    price: string;
  }