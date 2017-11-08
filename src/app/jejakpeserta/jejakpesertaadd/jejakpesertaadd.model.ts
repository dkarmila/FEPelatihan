import { Component, OnInit } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';

export class JejakPesertaAddModel{
    public _id: string;
    public KdPeserta: string;
    public KdAngkatan: string;
    public Tgl: Date;
    public TipePeserta: string;
}