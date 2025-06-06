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
@Table(name = "tb_tipo_produto")
public class TipoProduto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idTipoProduto", nullable = false)
    private Long idTipoProduto;
    
    @Column(name = "nomeTipoProduto", nullable = false, length = 100)
    private String nomeTipo;
    
    @Column(name = "descricaoTipoProduto", length = 255)
    private String descricao;

    @OneToMany(mappedBy = "tipoProduto")
    private List<Produto> produtos;

    // Construtores
    public TipoProduto() {
    }

    public TipoProduto(Long idTipoProduto, String nomeTipo, String descricao) {
        this.idTipoProduto = idTipoProduto;
        this.nomeTipo = nomeTipo;
        this.descricao = descricao;
    }

    // Getters e Setters
    public Long getIdTipoProduto() {
        return idTipoProduto;
    }

    public void setIdTipoProduto(Long idTipoProduto) {
        this.idTipoProduto = idTipoProduto;
    }

    public String getNomeTipo() {
        return nomeTipo;
    }

    public void setNomeTipo(String nomeTipo) {
        this.nomeTipo = nomeTipo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public List<Produto> getProdutos() {
        return produtos;
    }

    public void setProdutos(List<Produto> produtos) {
        this.produtos = produtos;
    }
}