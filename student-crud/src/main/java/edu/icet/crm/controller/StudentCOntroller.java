package edu.icet.crm.controller;

import edu.icet.crm.model.Student;
import edu.icet.crm.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
public class StudentController {

    private final StudentService studentService;

    @PostMapping("save-student")
    public Student persist(@RequestBody Student student) {
        return studentService.persist(student);
    }

    @GetMapping("get-all")
    List<Student> getAll() {
        return studentService.retrive();
    }

    @DeleteMapping("delete-student/{id}")
    public void deleteStd(@PathVariable(name = "id") Integer Id) {
        studentService.deleteStd(Id);
    }

    @PutMapping("update-student/{id}")
    public Student updateStd(@PathVariable(name = "id") Integer Id, @RequestBody Student student) {
        return studentService.updateStd(Id, student);
    }


}
