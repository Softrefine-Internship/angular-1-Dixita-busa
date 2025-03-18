import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  age: string;
  phoneno: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isEditing = false;
  name = '';
  age = '';
  phoneno = '';
  email = '';
  id = 0;
  searchTerm = '';

  get filteredUsers(): User[] {
    if (!this.searchTerm.trim()) {
      return this.data;
    }
    
    const term = this.searchTerm.toLowerCase();
    return this.data.filter(user => 
      user.name.toLowerCase().includes(term) || 
      user.email.toLowerCase().includes(term)
    );
  }

  set() {
    if (!this.name || !this.email || !this.age || !this.phoneno) {
      alert('Please fill in all fields');
      return;
    }
    
    const userIndex = this.data.findIndex((user) => user.id === this.id);
    if (userIndex !== -1) {
      this.data[userIndex] = {
        id: this.id,
        name: this.name,
        age: this.age,
        email: this.email,
        phoneno: this.phoneno,
      };
    }
    this.isEditing = false;
    this.resetForm();
  }

  setIsEditing(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.age = user.age;
    this.email = user.email;
    this.phoneno = user.phoneno;
    this.isEditing = true;
  }

  resetForm() {
    this.name = '';
    this.age = '';
    this.email = '';
    this.phoneno = '';
    this.id = 0;
  }

  closeModal() {
    this.isEditing = false;
    this.resetForm();
  }

  data: User[] = [
    {
      id: 1,
      name: 'Dixita Busa',
      email: 'dixita22@gmail.com',
      age: '20',
      phoneno: '9474561230',
    },
    {
      id: 2,
      name: 'Zeel Gondaliya',
      email: 'zeelu13@gmail.com',
      age: '23',
      phoneno: '8745963210',
    },
    {
      id: 3,
      name: 'Nirmi Maradiya',
      email: 'nimmi17@gmail.com',
      age: '22',
      phoneno: '7458123690',
    },
    {
      id: 4,
      name: 'Fena Patel',
      email: 'fenu1@yadav.gmail.com',
      age: '21',
      phoneno: '8527419630',
    },
    {
      id: 5,
      name: 'Krina Sapariya',
      email: 'krina111@gmail.com',
      age: '22',
      phoneno: '9517532840',
    },
    {
      id: 6,
      name: 'Yashvi Vachhani',
      email: 'yashvi16@gmail.com',
      age: '23',
      phoneno: '8745632109',
    },
    {
      id: 7,
      name: 'Vidhi Vekariya',
      email: 'vidhi123@gmail.com',
      age: '24',
      phoneno: '7845129630',
    },
    {
      id: 8,
      name: 'Jenisha Busa',
      email: 'jenii23@gmail.com',
      age: '19',
      phoneno: '6325418790',
    },
  ];
}