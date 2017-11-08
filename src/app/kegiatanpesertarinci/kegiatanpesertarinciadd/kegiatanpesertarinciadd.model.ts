import {Component, OnInit} from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions } from '@angular/http';

export class KegiatanPesertaRinciAddModel{
    public _id: string;
    public KdKegiatanPeserta: string;
    public JamMulai: string;
    public JamSelesai: string;
    public StatusHari:string;
    public KeteranganHari: string;
}