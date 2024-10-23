package edu.icet.crm.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.icet.crm.entity.StudentEntity;
import edu.icet.crm.model.Student;
import edu.icet.crm.repository.StudentRepository;
import edu.icet.crm.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;
    private final ObjectMapper mapper;

    @Override
    public Student persist(@RequestBody Student student) {
        StudentEntity studentEntity = studentRepository.save(mapper.convertValue(student, StudentEntity.class));
        return mapper.convertValue(studentEntity, Student.class);
    }

    @Override
    public List<Student> retrive() {
        Iterable<StudentEntity> all = studentRepository.findAll();
        ArrayList<Student> studentList = new ArrayList<>();

        all.forEach(StudentEntity -> {
            studentList.add(mapper.convertValue(StudentEntity, Student.class));
        });

        return studentList;
    }

    @Override
    public void deleteStd(Integer id) {
        Optional<StudentEntity> byId = studentRepository.findById(id);
        studentRepository.delete(byId.get());
    }

    @Override
    public Student updateStd(Integer id, Student student) {
        try {
            Optional<StudentEntity> byId = studentRepository.findById(id);
            StudentEntity studentEntity = byId.get();

            studentEntity.setStdName(student.getStdName());
            studentEntity.setStdAge(student.getStdAge());
            studentEntity.setStdContact(student.getStdContact());
            studentEntity.setGudName(student.getGudName());
            studentEntity.setGudAddress(student.getGudAddress());
            studentEntity.setGudContact(student.getGudContact());

            studentRepository.save(studentEntity);
            return mapper.convertValue(studentEntity, Student.class);
        } catch (IllegalArgumentException e) {
            throw new RuntimeException(e);
        }
    }
}