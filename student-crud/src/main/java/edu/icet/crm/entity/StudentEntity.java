package edu.icet.crm.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@Table(name = "student")
public class StudentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer stdId;
    private String stdName;
    private String stdAge;
    private String stdContact;
    private String gudName;
    private String gudAddress;
    private String gudContact;
}
