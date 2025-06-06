package br.com.joalheriaaurevielle.app.entities;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_usuario")
public class Usuario {	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idUsuario", nullable = false)
    private Long idUsuario;
    
    @Column(name = "nomeUsuario", nullable = false, length = 100)
    private String nomeUsuario;
    
    @Column(name = "senha", nullable = false, length = 255)
    private String senha;
    
    @Column(name = "cpf", nullable = false, length = 11, unique = true)
    private String cpf;
    
    @Column(name = "email", nullable = false, unique = true, length = 50)
    private String email;
    
    @Column(name = "telefone", nullable = false)
    private String telefone;
    
    @Column(name = "dt_nascimento")
    private LocalDate dataNascimento;

    @ManyToOne
    @JoinColumn(name = "tipo_usuario_id", nullable = false)
    @JsonIgnoreProperties("usuarios")
    private TipoUsuario tipoUsuario;
    
    @OneToMany(mappedBy = "usuario")
    @JsonManagedReference
    private List<Endereco> enderecos;

    // Construtores
    public Usuario() {
    }

    public Usuario(Long idUsuario, String nomeUsuario, String senha, String cpf, 
                   String email, String telefone, LocalDate dataNascimento, TipoUsuario tipoUsuario) {
        this.idUsuario = idUsuario;
        this.nomeUsuario = nomeUsuario;
        this.senha = senha;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
        this.tipoUsuario = tipoUsuario;
    }

    // Getters e Setters
    public Long getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getNomeUsuario() {
        return nomeUsuario;
    }

    public void setNomeUsuario(String nomeUsuario) {
        this.nomeUsuario = nomeUsuario;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public TipoUsuario getTipoUsuario() {
        return tipoUsuario;
    }

    public void setTipoUsuario(TipoUsuario tipoUsuario) {
        this.tipoUsuario = tipoUsuario;
    }
}