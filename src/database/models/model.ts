import Realm from 'realm'
import db from '..'

export default abstract class Model<TModel> {
  protected schema: Realm.ObjectSchema

  constructor(schema: Realm.ObjectSchema) {
    this.schema = schema
  }

  public create(data: TModel) {
    db.instance().write(() => {
      return db.instance().create(this.schema.name, data)
    })
  }

  public update(data: TModel) {
    db.instance().write(() => {
      return db.instance().create(this.schema.name, data, true)
    })
  }

  public createMultiple(data: TModel[]) {
    db.instance().write(() => {
      data.forEach(item => {
        db.instance().create(this.schema.name, item)
      })
    })
  }

  public updateMultiple(data: TModel[]) {
    db.instance().write(() => {
      data.forEach(item => {
        db.instance().create(this.schema.name, item, true)
      })
    })
  }

  public get() {
    return db.instance().objects(this.schema.name)
  }

  public getArray() {
    return [...this.get()].map(item => ({ ...((item as unknown) as TModel) }))
  }

  public deleteAll() {
    db.instance().write(() => {
      db.instance().delete(this.get())
    })
  }
}
