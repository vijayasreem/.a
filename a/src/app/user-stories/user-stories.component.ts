import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-stories',
  templateUrl: './user-stories.component.html',
  styleUrls: ['./user-stories.component.css']
})
export class UserStoriesComponent implements OnInit {
  userStoryForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.userStoryForm = this.formBuilder.group({
          userStoryTitle: ['', Validators.required],
          userStoryDescription: ['', Validators.required],
          assignedTeamMember: ['', Validators.required]
      });
  }

  get f() { return this.userStoryForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.userStoryForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)');
  }

}