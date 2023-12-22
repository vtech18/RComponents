export type basicFormType = {
    userName: string;
    firstName: string;
    lastName: string;
    gender: string;
    fatherOrSpouseName: string;
    email: string;
    phone: string;
    alternatePhone: string;
    aadharNumber: string;
    address: string;
    state: string;
    district: string;
    village: string;
    city: string;
    shiftType: string;
    employeeType: string;
    businessUnitId: string;
  };
  
  export type bankDetailsType = {
    accountNumber: string;
    bankName: string;
    ifscCode: string;
    pfNumber: string;
    bankAddress: string;
    panNumber: string;
    uanNumber: string;
    esiNumber: string;
  };
  
  export type BenifitsType = {
    isMedical: boolean;
    isFamily: boolean;
    isTransport: boolean;
    otherBenifits: string;
  };
  
  export type PositionalType = {
    businessUnitId: string;
    departmentId: string;
    designationId: string;
    role: string;
    qualitification: string;
    trade: string;
    dateOfJoining: string;
    hireDate: string;
    category: string;
    dateOfLeaving: string;
    reasonOfLeaving: string;
    vrsOrVt: boolean;
    reHireDate: string;
    rateType: string;
    monthlyRate: string;
    monthlyPayFrequency: string;
  };
  
  export type GradeLevelType = {
    classCode: string;
    classDescription: string;
    gradeLevel: string;
  };
  
  export type SupervisorType = {
    supervisorId: string;
    supervisorName: string;
    supervisorContactDetails: string;
    reportingTo: string;
  };
  export type BiographicalDataType = {
    dateOfBirth: string;
    nationality: string;
    uploadImage: string;
    permenantAddress: string;
    permenantState: string;
    permenantDistrict: string;
    permenantCity: string;
    permanentTown: string;
    permenantVillage: string;
    busRoute: string;
    maritalStatus: string;
  };
  export type AdditionalInfoType = {
    previousCompanyName: string;
    location: string;
    previousDesignation: string;
    tenure: string;
  };
  export type EmergencyContactType = {
    emergencyContactName: string;
    emergencyContactNumber: string;
    emergencyContactRelation: string;
    emergencyWorkPhoneNumber: string;
    employeeBloodGroup: string;
  };
  
  export type LoginType = {
    mobileNumber: string;
    employeeId: string;
    password: string;
  };
  
  export type mainFormType = basicFormType &
    bankDetailsType &
    BenifitsType &
    PositionalType &
    GradeLevelType &
    SupervisorType &
    BiographicalDataType &
    AdditionalInfoType &
    EmergencyContactType &
    LoginType & {
      id: number;
    };
  
  export interface BasicInfoDetailsProps {
    isVisible: boolean;
    formDataInput: basicFormType;
    onNext: (data: basicFormType, turnPage?: boolean) => void;
  }
  
  export interface BankDetailsProps {
    isVisible: boolean;
    formDataInput: bankDetailsType;
    onNext: (data: bankDetailsType, turnPage?: boolean) => void;
    onPrev: () => void;
  }
  
  export interface BenefitsProps {
    isVisible: boolean;
    formDataInput: BenifitsType;
    onNext: (data: BenifitsType, turnPage?: boolean) => void;
    onPrev: () => void;
  }
  
  export type dropDown = {
    id: number;
    name: string;
  };
  
  export interface RTableProps {
    headers: Array<{ key: string; header: string }>;
    columns: Array<Record<string, any>>;
    onCheckboxChange: (index: number) => void;
    bulkDeleteArray: number[];
    editButtonText: any;
    deleteButtonText: any;
    deleteButtonColor: "danger" | "success" | "warning" | "primary" | "secondary";
    editButtonColor: "danger" | "success" | "warning" | "primary" | "secondary";
    onEdit: (item: Record<string, any>) => void;
    onDelete: (index: number) => void;
    tableRef: React.MutableRefObject<any>;
    searchQuery: string;
    hideButtons: boolean;
  }
  export interface ActionProps {
    itemsPerPage: number;
    tableRef: React.MutableRefObject<any>;
    setItemsFunction: Function;
    searchQuery: string;
    setSearchFunction: Function;
    hideButtons: boolean;
    setHide: Function;
  }
  export interface TRainersType {
    id: number;
    createdAt: string;
    updatedAt: string;
    phone: string;
    email: string | null;
    firstName: string;
    lastName: string;
    expertise: string | null;
    address: string | null;
  }
  
  export interface Training {
    id: number;
    trainingTypeId: number;
    businessUnitId: number;
    trainerId: number;
    approvedById: number;
    trainingType: string;
    startDate: string;
    endDate: string;
    approvedBy: string;
    trainer: string;
    businessName: string;
  }
  export interface trainers {
    id: number;
    phone: string;
    email: string | null;
    expertise: string | null;
    address: string | null;
    name: string;
    businessName: string;
  }
  export interface RestaurantTY {
    id: number;
    name: string;
    address: string;
    phone: string;
    businessName: string;
    status: string;
  }
  export interface Category {
    id: number;
    name: string;
    restaurentName: string;
    businessName: string;
  }
  export interface LoggedUser {
    msg: string;
    id: number;
    permissions: {
      name: string;
      link: string;
    }[];
    token: string;
    businessUnit: {
      id: number;
      name: string;
    };
  }
  export interface AppraisalType {
    id: number;
    createdAt: string;
    updateAt: string;
    customerExperience: string;
    marketing: string;
    administration: string;
    professionalism: string;
    integrity: string;
    attendence: string;
    remarks: string;
    date: string;
    employee_id: number;
    business_unit_id: number;
    employeeName: string;
    businessUnitName: string;
  }
  
  export interface BusinessUnitData {
    id: 1;
    createdAt: string;
    updateAt: string;
    name: string;
    code: string;
    phone: string;
    address: string;
    status: string;
  }
  
  export interface MenuItemsType {
    menuItemId: number;
    name: string;
    price: string;
    restaurentName: string;
    restaurentAddress: string;
    restaurentPhone: string;
    categoryName: string;
    businessName: string;
  }
  
  export interface CommunicationType {
    id: 1;
    attachment: string | null;
    category: string;
    subject: string;
    content: string;
    createdAt: string;
  }
  
  export interface UserType {
    id: number;
    createdAt: string;
    updateAt: string;
    firstName: string;
    lastName: string;
    gender: string;
    fatherOrSpouseName: string;
    email: string;
    phone: string;
    alternatePhone?: string;
    aadharNumber: string;
    address: string;
    state: string;
    district: string;
    city: string;
    village: string;
    shiftType: string;
    employeeType: string;
    status?: string;
    accountNumber: string;
    bankName: string;
    ifscCode: string;
    bankAddress: string;
    panNumber: string;
    pfNumber: string;
    esiNumber?: string;
    uanNumber?: string;
    qualitification: string;
    trade: string;
    dateOfJoining: string;
    hireDate: string;
    category?: string;
    dateOfLeaving: string;
    reasonOfLeaving: string;
    vrsOrVt?: string;
    rehireDate: string;
    rateType: string;
    monthlyPayFrequency: string;
    monthlyRate: number;
    isMedical?: boolean;
    isFamily?: boolean;
    isTransport?: boolean;
    otherBenifits?: string;
    classCode?: string;
    classDescription?: string;
    gradeLevel?: string;
    martialStatus: string;
    dateOfBirth: string;
    nationality: string;
    permenantAddress: string;
    permenantState: string;
    permenantDistrict: string;
    permenantCity: string;
    permenantVillage: string;
    busRoute: string;
    image?: string;
    previousEmployer: string;
    previousEmployerAddress: string;
    previousDesignation: string;
    tenure: string;
    document: string;
    emergencyContactName: string;
    emergencyContactNumber: string;
    emergencyContactRelation: string;
    emergencyWorkPhoneNumber?: string;
    bloodGroup: string;
    userName: string;
    employeeId: string;
    password: string;
    hasFingerPrint: boolean;
    role: {
      id: number;
      createdAt: string;
      updateAt: string;
      name: string;
      description: string;
    };
  }
  
  export interface Employee {
    id: number;
    userName: string;
    employeeId: string;
    phone: string;
    email: string;
    dateOfJoining_formatted: string;
    businessUnitName: string;
    departmentName: string;
  }
  