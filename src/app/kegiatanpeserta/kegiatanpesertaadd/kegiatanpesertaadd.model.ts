import { Component, OnInit } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';

export class KegiatanPesertaAddModel{
    public _id: string;
    public KdPeserta: string;
    public KdStaticPeserta: string;
    public KdKegiatanPeserta: string;
    public TglMulai: string;
    public TglSelesai: string;
    public KdPegawai:string;
}