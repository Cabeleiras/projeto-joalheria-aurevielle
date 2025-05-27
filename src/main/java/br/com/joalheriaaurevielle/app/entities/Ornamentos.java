package br.com.joalheriaaurevielle.app.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_ornamentos")
public class Ornamentos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idOrnamento", nullable = false)
    private Long idOrnamento;
    
    @Column(name = "nomeOrnamento", nullable = false, length = 100)
    private String nomeOrnamento;
    
    @Column(name = "descricaoOrnamento", length = 255)
    private String descricaoOrnamento;

    @OneToMany(mappedBy = "ornamento")
    private List<Produto> produtos;

    // Construtores
    public Ornamentos() {
    }

    public Ornamentos(Long idOrnamento, String nomeOrnamento, String descricaoOrnamento) {
        this.idOrnamento = idOrnamento;
        this.nomeOrnamento = nomeOrnamento;
        this.descricaoOrnamento = descricaoOrnamento;
    }

    // Getters e Setters
    public Long getIdOrnamento() {
        return idOrnamento;
    }

    public void setIdOrnamento(Long idOrnamento) {
        this.idOrnamento = idOrnamento;
    }

    public String getNomeOrnamento() {
        return nomeOrnamento;
    }

    public void setNomeOrnamento(String nomeOrnamento) {
        this.nomeOrnamento = nomeOrnamento;
    }

    public String getDescricaoOrnamento() {
        return descricaoOrnamento;
    }

    public void setDescricaoOrnamento(String descricaoOrnamento) {
        this.descricaoOrnamento = descricaoOrnamento;
    }

    public List<Produto> getProdutos() {
        return produtos;
    }

    public void setProdutos(List<Produto> produtos) {
        this.produtos = produtos;
    }
}