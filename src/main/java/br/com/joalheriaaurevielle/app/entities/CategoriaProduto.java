package br.com.joalheriaaurevielle.app.entities;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_categoria_produto")
public class CategoriaProduto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idCategoriaProduto", nullable = false)
    private Long idCategoriaProduto;
    
    @Column(name = "nomeCategoriaProduto", nullable = false, length = 100)
    private String nomeCategoriaProduto;
    
    @Column(name = "descricaoCategoriaProduto", length = 255)
    private String descricaoCategoriaProduto;

    @OneToMany(mappedBy = "categoriaProduto")
    private List<Produto> produtos;

    // Construtores
    public CategoriaProduto() {
    }

    public CategoriaProduto(Long idCategoriaProduto, String nomeCategoriaProduto, String descricaoCategoriaProduto) {
        this.idCategoriaProduto = idCategoriaProduto;
        this.nomeCategoriaProduto = nomeCategoriaProduto;
        this.descricaoCategoriaProduto = descricaoCategoriaProduto;
    }

    // Getters e Setters
    public Long getIdCategoriaProduto() {
        return idCategoriaProduto;
    }

    public void setIdCategoriaProduto(Long idCategoriaProduto) {
        this.idCategoriaProduto = idCategoriaProduto;
    }

    public String getNomeCategoriaProduto() {
        return nomeCategoriaProduto;
    }

    public void setNomeCategoriaProduto(String nomeCategoriaProduto) {
        this.nomeCategoriaProduto = nomeCategoriaProduto;
    }

    public String getDescricaoCategoriaProduto() {
        return descricaoCategoriaProduto;
    }

    public void setDescricaoCategoriaProduto(String descricaoCategoriaProduto) {
        this.descricaoCategoriaProduto = descricaoCategoriaProduto;
    }

    public List<Produto> getProdutos() {
        return produtos;
    }

    public void setProdutos(List<Produto> produtos) {
        this.produtos = produtos;
    }
}