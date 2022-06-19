import { Injectable } from '@angular/core';
import { emp } from './emp-data.modal';

@Injectable({
  providedIn: 'root',
})
export class EmpDataService {
  private emp: emp[] = [
    {
      id: 1,
      name: 'Will',
      gender: 'Male',
      country: 'USA',
    },
    {
      id: 2,
      name: 'Joy',
      gender: 'Female',
      country: 'Sri Lanak',
    },
    {
      id: 3,
      name: 'Gram',
      gender: 'Male',
      country: 'Microsoft',
    },
    {
      id: 4,
      name: 'Kumar',
      gender: 'Male',
      country: 'India',
    },
    {
      id: 5,
      name: 'John',
      gender: 'Male',
      country: 'United Kingdom',
    },
    {
      id: 6,
      name: 'Priya kanana',
      gender: 'Female',
      country: 'India',
    },
    {
      id: 7,
      name: 'Shri Devi',
      gender: 'Female',
      country: 'Sri Lanka',
    },
    {
      id: 8,
      name: 'Richard Roy',
      gender: 'Male',
      country: 'France',
    },
    {
      id: 9,
      name: 'Sonu Nigam',
      gender: 'Male',
      country: 'India',
    },
    {
      id: 10,
      name: 'Priya Dutt',
      gender: 'Female',
      country: 'USA',
    },
    {
      id: 11,
      name: 'Will Smith',
      gender: 'Male',
      country: 'USA',
    },
    {
      id: 12,
      name: 'Jackline Joy',
      gender: 'Female',
      country: 'Sri Lanak',
    },
    {
      id: 13,
      name: 'Alu Arjun',
      gender: 'Male',
      country: 'Microsoft',
    },
    {
      id: 14,
      name: 'Kavitha Kumar',
      gender: 'Female',
      country: 'India',
    },
    {
      id: 15,
      name: 'John Snow',
      gender: 'Male',
      country: 'United Kingdom',
    },
    {
      id: 16,
      name: 'Priya kanana',
      gender: 'Female',
      country: 'India',
    },
    {
      id: 17,
      name: 'Shri Devi',
      gender: 'Female',
      country: 'Sri Lanka',
    },
    {
      id: 18,
      name: 'Richard Roy',
      gender: 'Male',
      country: 'France',
    },
    {
      id: 19,
      name: 'Sonu Nigam',
      gender: 'Male',
      country: 'India',
    },
    {
      id: 20,
      name: 'Priya Dutt',
      gender: 'Female',
      country: 'USA',
    },
    {
      id: 21,
      name: 'Shri Devi',
      gender: 'Female',
      country: 'Sri Lanka',
    },
    {
      id: 22,
      name: 'Richard Roy',
      gender: 'Male',
      country: 'France',
    },
    {
      id: 23,
      name: 'Sonu Nigam',
      gender: 'Male',
      country: 'India',
    },
    {
      id: 24,
      name: 'Priya Dutt',
      gender: 'Female',
      country: 'USA',
    },
    {
      id: 25,
      name: 'Will Smith',
      gender: 'Male',
      country: 'USA',
    },
    {
      id: 26,
      name: 'Jackline Joy',
      gender: 'Female',
      country: 'Sri Lanak',
    },
    {
      id: 27,
      name: 'Alu Arjun',
      gender: 'Male',
      country: 'Microsoft',
    },
    {
      id: 28,
      name: 'Kavitha Kumar',
      gender: 'Female',
      country: 'India',
    },
    {
      id: 29,
      name: 'John Snow',
      gender: 'Male',
      country: 'United Kingdom',
    },
    {
      id: 30,
      name: 'Priya kanana',
      gender: 'Female',
      country: 'India',
    },
    {
      id: 31,
      name: 'Shri Devi',
      gender: 'Female',
      country: 'Sri Lanka',
    },
    {
      id: 32,
      name: 'Richard Roy',
      gender: 'Male',
      country: 'France',
    },
    {
      id: 33,
      name: 'Sonu Nigam',
      gender: 'Male',
      country: 'India',
    },
    {
      id: 34,
      name: 'Priya Dutt',
      gender: 'Female',
      country: 'USA',
    },
  ];

  constructor() {}

  getAllEmp() {
    return [...this.emp];
  }

  getEmpById(empId: number) {
    return {
      ...this.emp.find(data => {
        return data.id === empId;
      }),
    };
  }
}
