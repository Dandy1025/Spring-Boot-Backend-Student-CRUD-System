package edu.icet.crm.service;

import edu.icet.crm.model.Student;

import java.util.List;

public interface StudentService {
    Student persist(Student student);

    List<Student> retrive();

    void deleteStd(Integer id);

    Student updateStd(Integer id, Student student);
}
