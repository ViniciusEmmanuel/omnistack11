import 'reflect-metadata';
import { createConnections } from 'typeorm';

export const DbConnection = createConnections();
